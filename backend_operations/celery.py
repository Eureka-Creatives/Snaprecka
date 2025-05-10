from celery import Celery

# Create a celery app instance and configure the broker directly
app = Celery('tasks', broker='redis://localhost:6379/0', backend='redis://localhost:6379/0')

# define a simple task
@app.task
def add(x, y):
    return x+y
