from django.contrib import admin

from .models import Job, Company, CustomUser, Favourites, Likes, Dislikes

admin.site.register(Job)
admin.site.register(Company)
admin.site.register(CustomUser)
admin.site.register(Favourites)
admin.site.register(Likes)
admin.site.register(Dislikes)
