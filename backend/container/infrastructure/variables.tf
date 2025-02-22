variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "nodejs-backend"
}

variable "environment" {
  description = "Environment (development/staging/production)"
  type        = string
  default     = "development"
} 