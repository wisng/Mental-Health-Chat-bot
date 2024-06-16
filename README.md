# Serenity

## About Serenity
Serenity is a mental health chatbot designed to provide support and resources for mental wellness. Our chatbot uses the LLaMA 3 70B model as its foundation, fine-tuned through prompt engineering to offer empathetic and informative responses.
Under the hood, Serenity leverages Nvidia's NIM API calls and LangChain to generate human-like text. Additionally, we incorporate sentiment analysis powered by Jochen Hartmann's "Emotion English DistilRoBERTa-base" model (Hartmann, 2022), available on Hugging Face. This allows us to better understand and respond to users' emotional needs.

My goal with Serenity is to create a safe and non-judgmental space for individuals to discuss their mental health concerns and receive helpful resources and support.

Please note that Serenity is not intended to replace professional mental health advice or therapy.

References
Hartmann, J. (2022). Emotion English DistilRoBERTa-base. Hugging Face.
Let me know if this meets your needs or if you'd like me to make any changes!

## Getting Started
### Prerequisites - Python 3.10 - pip 23 - Node.js 16.15 - Angular 14.1 - npm 8.11

### Steps

1. Clone the Repository
2. Clone the Serenity repository to your local machine using Git:

``` git clone https://your-repo-url.com ```

Start the Backend

3. Navigate to the backend folder:

``` cd backend ```

4. Install the required packages using pip:

``` pip install -r requirements.txt ```

5. Create a token.env file with your Nvidia NIM token:

``` NVIDIA_TOKEN={YOUR_API_KEY} ```

6. Run the backend server:

``` python main.py ```

Start the Frontend

7. Navigate to the frontend folder:

``` cd frontend ```

8. Install the required packages using npm:

``` npm install ```

9. Start the development server:

``` ng serve ```

10. Open a web browser and navigate to:

``` http://localhost:4200 ```

That's it! You should now have Serenity up and running on your local machine.

## Contact
If you have any questions or need help, please email wisdomkangngo@gmail.com.

I hope this helps! Let me know if you have any questions or need further assistance.
