myob-auth k -e europa-preprod
kubectl delete -f ./scripts/vegetable-api-be.yaml -n training

kubectl apply -f ./scripts/vegetable-api-be.yaml -n training
