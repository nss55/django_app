FROM python:latest
WORKDIR /app
COPY . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN git config --system credential.helper gcloud.sh
#RUN apt-get update && apt-get install -y python-setuptools
EXPOSE 8080
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080"]
