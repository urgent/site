FROM python:3
WORKDIR /usr/src/app
COPY ./src ./
RUN pip install --upgrade openai
CMD [ "python", "./your-daemon-or-script.py" ]