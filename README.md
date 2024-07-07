# use docker composer

1. run the following command

```
docker-compose up
```

2. open the browser and visit the following url
   en page: http://localhost:30000/about-us
   zh page: http://localhost:30000/zh/about-us

   you can open http://localhost:30001 to visit the drupal.
   The default admin user and password is: `admin` `KWh65tiuk4wHWrq`

   you can change port in the `.env` file
   or you can change the password with the following command

   ```
   docker-compose exec drupal sh -c "./vendor/bin/drush user:password admin newpassword"
   ```
