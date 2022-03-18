from django.db import models
from django.utils import timezone
from tourists.models import User
from agencies.models import agency
from django.urls import reverse
# Create your models here.


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_like')
    blog = models.ForeignKey('blog_post', on_delete=models.CASCADE)
    liked_at = models.DateTimeField(auto_now_add=True)


class blog_post(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(blank=True, null=True)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, blank=True, through=Like, related_name='like')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk':self.pk})


class comment(models.Model):
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=400)
    blog = models.ForeignKey(blog_post, related_name='comments', on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)





