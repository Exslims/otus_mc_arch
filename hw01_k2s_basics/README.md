### Команды

Я разворачивал все на платном Managed Kubernetes у провайдера Selectel

Установка в облакое ingress-controller
> helm upgrade --install ingress-nginx ingress-nginx \
--repo https://kubernetes.github.io/ingress-nginx \
--namespace ingress-nginx --create-namespace \
--values nginx-config.yaml

Деплой манифеста приложения (Сервис + Деплоймент)
> kubectl apply -f app-deployment.yaml

Проверка что поды отвечают через port-forward (можно в целом просто пробы чекнуть)
> kubectl --namespace otus port-forward pod/{POD} 5678:3000

Деплой манифеста для ingress
> kubectl apply -f ingress.yaml

curls для проверки
> curl http://arch.homework/otusapp/konstantin/kuptsov
> 
> curl http://arch.homework/health

