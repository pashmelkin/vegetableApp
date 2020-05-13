myob-auth l

$(aws ecr get-login --no-include-email --region ap-southeast-2)
docker build -t vegetable-api-be .
docker tag vegetable-api-be:latest 325571649150.dkr.ecr.ap-southeast-2.amazonaws.com/vegetable-api-be:latest
docker push 325571649150.dkr.ecr.ap-southeast-2.amazonaws.com/vegetable-api-be:latest
