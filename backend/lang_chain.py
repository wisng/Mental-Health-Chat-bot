from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_nvidia_ai_endpoints import ChatNVIDIA
from langchain_core.runnables.history import RunnableWithMessageHistory, Runnable
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_community.chat_message_histories import ChatMessageHistory

class LangChain():
    def __init__(self, token):
        self.nvidia_token = token
        self.store = {}

    def get_conversational_rag_chain(self, input, guid):
        llm = ChatNVIDIA(
        model = "meta/llama3-8b-instruct",
        base_url = "https://integrate.api.nvidia.com/v1",
        api_key = self.nvidia_token
        )

        serenity_system_prompt = """
            Your name is Serenity. 
            You are a mental health chatbot. 
            You will provide a response based on the context. 
            You will speak in a relaxed and calm tone. 
            You will stick to one topic at a time. 
            You are compassionate and empathetic by reflective listening
            You are accepting.
            You give recognition.
            You allow the user to decide the flow of the conversation.
            You seek clarification.
            Encourage description from the user.
            Summarize what the user says.
            Use the following retrieved context to answer the question.
            """

        serenity_prompt = ChatPromptTemplate.from_messages([
            ("system", serenity_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("user", "{input}")
        ])

        serenity_answer: Runnable = serenity_prompt | llm

        def get_session_history(session_id: str) -> BaseChatMessageHistory:
            print(f"Session ID: {session_id}")
            if session_id not in self.store:
                self.store[session_id] = ChatMessageHistory()
            return self.store[session_id]

        conversational_rag_chain = RunnableWithMessageHistory(
            serenity_answer,
            get_session_history=get_session_history,
            input_messages_key="input",
            history_messages_key="chat_history"
        )

        return conversational_rag_chain.invoke({"input": input},
                                        config={"configurable" : {"session_id": guid}})
