resource "aws_secretsmanager_secret" "app_secrets" {
  name = "${var.project_name}-app-secrets"
}