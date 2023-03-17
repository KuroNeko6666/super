export const API_CONFIG = {
  base: `https://dev.apigw.pencarian.me`,
  login: `/api/v1/backoffice/auth/login`,
  register: `/api/v1/backoffice/auth/register`,
  news: {
    get_all: `/api/v1/backoffice/news/get_all`,
    get: `/api/v1/backoffice/news/get/`,
    create: `/api/v1/backoffice/news/create`,
    update: `/api/v1/backoffice/news/update/`,
    delete: `/api/v1/backoffice/news/delete/`,
  },
  activity: {
    get_all: `/api/v1/backoffice/activity/get_all`,
    get: `/api/v1/backoffice/activity/get/`,
    create: `/api/v1/backoffice/activity/create`,
    update: `/api/v1/backoffice/activity/update/`,
    delete: `/api/v1/backoffice/activity/delete/`,
    delete_image: `/api/v1/backoffice/activity/delete_image/`,
  },
  user : {
    get_all: `/api/v1/backoffice/superuser/get_all`,
    get: `/api/v1/backoffice/superuser/get`,
    create: `/api/v1/backoffice/auth/register`,
    update: `/api/v1/backoffice/superuser/update/`,
    delete: `/api/v1/backoffice/superuser/delete/`,
    operator: `/api/v1/backoffice/superuser/get_user_roles/2`,
    admin: `api/v1/backoffice/superuser/get_user_roles/1`,
  },

  keycloak: {
    get_all: `/api/v1/backoffice/users/get_all`,
    get: `/api/v1/backoffice/users/get/`,
    create: `/api/v1/backoffice/auth_users/register`,
    delete: `/api/v1/backoffice/users/delete/`,
    update: `/api/v1/backoffice/users/update/`,
    change_avatar: '/api/v1/backoffice/users/change_avatar/'
  },
}
