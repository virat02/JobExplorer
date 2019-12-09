from jobs.api.views import (JobViewSet, UserViewSet, CompanyViewSet,
                            LikeViewSet, DislikeViewSet, BookmarkViewSet,
                            LikedJobsViewSet, DislikedJobsViewSet,
                            BookmarkedJobsViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='jobs')
router.register(r'users', UserViewSet, basename='users')
router.register(r'companies', CompanyViewSet, basename='companies')
router.register(r'like', LikeViewSet, basename='likes')
router.register(r'dislike', DislikeViewSet, basename='dislikes')
router.register(r'bookmark', BookmarkViewSet, basename='bookmarks')
router.register(r'likedJobs', LikedJobsViewSet, basename='likedJobs')
router.register(r'dislikedJobs', DislikedJobsViewSet, basename='dislikedJobs')
router.register(r'bookmarkedJobs', BookmarkedJobsViewSet,
                basename='bookmarkedJobs')
urlpatterns = router.urls
