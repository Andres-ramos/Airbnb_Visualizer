# Official PostGIS image
FROM postgis/postgis

# Set Enviroment Variables
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydatabase

# Start the PostgreSQL service
CMD ["postgres"]