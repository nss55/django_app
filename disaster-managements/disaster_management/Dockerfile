FROM python:latest
WORKDIR /app
COPY . .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN git config --system credential.helper gcloud.sh
RUN apt-get update && apt-get install -y python-setuptools
RUN pip install bash_kernel && python -m bash_kernel.install
ENV DEFAULT_KERNEL_NAME "bash"
EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
