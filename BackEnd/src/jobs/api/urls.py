from jobs.api.views import JobViewSet, UserViewSet, CompanyViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='jobs')
router.register(r'users', UserViewSet, basename='users')
router.register(r'companies', CompanyViewSet, basename='companies')
urlpatterns = router.urls
