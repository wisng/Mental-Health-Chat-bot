# Serenity

## About Serenity
Serenity is a mental health chatbot designed to provide support and resources for mental wellness. Our chatbot uses the LLaMA 3 8B model as its foundation, fine-tuned through prompt engineering to offer empathetic and informative responses.
Under the hood, Serenity leverages [Nvidia's NIM](https://build.nvidia.com/explore/discover) API calls and LangChain to generate human-like text. Additionally, we incorporate sentiment analysis powered by [Jochen Hartmann's "Emotion English DistilRoBERTa-base" model (Hartmann, 2022)](https://huggingface.co/j-hartmann/emotion-english-distilroberta-base), available on Hugging Face. This allows us to better understand and respond to users' emotional needs.

My goal with Serenity is to create a safe and non-judgmental space for individuals to discuss their mental health concerns and receive helpful resources and support.

Please note that Serenity is not intended to replace professional mental health advice or therapy.

References
Hartmann, J. (2022). Emotion English DistilRoBERTa-base. Hugging Face.

## Getting Started
### Prerequisites 
- Python 3.10
- pip 23
- Node.js 16.15
- Angular 14.1
- npm 8.11

### Steps

1. Clone the Serenity repository to your local machine using Git:

``` Bash
git clone https://github.com/wisng/Serenity
```

Start the Backend

2. Navigate to the backend folder:

```Bash
cd backend
```

3. Install the required packages using pip:

``` Shell
pip install -r requirements.txt
```

4. Create a token.env file with your Nvidia NIM token:

``` NVIDIA_TOKEN={YOUR_API_KEY} ```

5. Run the backend server:

``` Shell
python main.py
```

Start the Frontend

6. Navigate to the frontend folder:

``` Bash
cd frontend
```

7. Install the required packages using npm:

``` Bash
npm install
```

8. Start the development server:

``` Bash
ng serve
```

9. Open a web browser and navigate to:

``` http://localhost:4200 ```

That's it! You should now have Serenity up and running on your local machine.

## Contact
If you have any questions or need help, please email wisdomkangngo@gmail.com.
