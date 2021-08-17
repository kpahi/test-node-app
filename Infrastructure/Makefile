
# AWS_ARGS=--profile $(AWS_PROFILE) --region $(AWS_REGION)
AWS_ARGS=--region $(AWS_REGION)


ENV_NAME:=team-a
STACK_PARAMS := ParameterKey=EnvironmentName,ParameterValue=$(ENV_NAME)


VPC_STACK=$(ENV_NAME)-vpc-test
ECS_STACK=$(ENV_NAME)-ecs-cluster-test
LOAD_BALANCER_STACK=$(ENV_NAME)-load-balancer
SERVICE_STACK_NAME=$(ENV_NAME)-ecs-graphite-statsd-service
APP_SERVICE_STACK_NAME=$(ENV_NAME)-ecs-test-node-app

create-vpc-stack:
	aws cloudformation create-stack --stack-name $(VPC_STACK) --template-body file://`pwd`/vpc.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

update-vpc-stack:
	aws cloudformation update-stack --stack-name $(VPC_STACK) --template-body file://`pwd`/vpc.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

create-loadbalancer-stack:
	aws cloudformation create-stack --stack-name $(LOAD_BALANCER_STACK) --template-body file://`pwd`/loadbalancer.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

update-loadbalancer-stack:
	aws cloudformation update-stack --stack-name $(LOAD_BALANCER_STACK) --template-body file://`pwd`/loadbalancer.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

create-ecs-cluster-stack:
	aws cloudformation create-stack --stack-name $(ECS_STACK) --template-body file://`pwd`/ecs-cluster.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

update-ecs-cluster-stack:
	aws cloudformation update-stack --stack-name $(ECS_STACK) --template-body file://`pwd`/ecs-cluster.yaml --capabilities CAPABILITY_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

create-graphite-statsd-service:
	aws cloudformation create-stack --stack-name $(SERVICE_STACK_NAME) --template-body file://graphite-statsd.yaml --capabilities CAPABILITY_NAMED_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

update-graphite-statsd-service:
	aws cloudformation update-stack --stack-name $(SERVICE_STACK_NAME) --template-body file://graphite-statsd.yaml --capabilities CAPABILITY_NAMED_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS) 

create-test-app-service:
	aws cloudformation create-stack --stack-name $(APP_SERVICE_STACK_NAME) --template-body file://test-app.yaml --capabilities CAPABILITY_NAMED_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)

update-test-app-service:
	aws cloudformation update-stack --stack-name $(APP_SERVICE_STACK_NAME) --template-body file://test-app.yaml --capabilities CAPABILITY_NAMED_IAM $(AWS_ARGS) --parameters $(STACK_PARAMS)
