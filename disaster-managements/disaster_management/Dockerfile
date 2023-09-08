FROM python:latest
WORKDIR /app
COPY disaster_managements/. .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
