/*
  Deploy
  - docker + kubernetes


-------------------------


  # Create Dockerfile

  # Method 1
      Build
      - docker build -t orders-service .
      - docker build -t inventory-service .
      Run
      - docker run -p 5001:5001 -d orders-service
      - docker run -p 5002:5002 -d inventory-service

  # Method 2
      - docker compose up --build


--------------------------

  Test 
  - http://localhost:5001/orders/inventory



*/
