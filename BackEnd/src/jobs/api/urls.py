from jobs.api.views import (JobViewSet, UserViewSet, CompanyViewSet,
                            LikeViewSet, LikedJobsViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='jobs')
router.register(r'users', UserViewSet, basename='users')
router.register(r'companies', CompanyViewSet, basename='companies')
router.register(r'like', LikeViewSet, basename='likes')
router.register(r'likedJobs', LikedJobsViewSet, basename='likedJobs')
urlpatterns = router.urls
