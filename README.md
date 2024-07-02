# download the code

# deploy the backend service

1. install the drupal and nginx env
2. add following line to drupal-itc/web/sites/default/settings.php

```
$settings['config_sync_directory'] = 'sites/sync';
```

3. update the drupal config

```
composer install
drush config:import
drush cache:rebuild
```

# deploy frontend

1. go to frontend folder

```
cd next-itc

```

2. copy file .env.example to .env.local
3. change the params `NEXT_PUBLIC_DRUPAL_BASE_URL` and `NEXT_IMAGE_DOMAIN`to the real domain and base url

```
NEXT_PUBLIC_DRUPAL_BASE_URL=https://dev.next-drupal.org

NEXT_IMAGE_DOMAIN=dev.next-drupal.org
```

3. run the command to deploy

```
npm run preview
```

# visit the about us url

```
   <domain>/about-us
   example: http://localhost:3000/about-us
```
