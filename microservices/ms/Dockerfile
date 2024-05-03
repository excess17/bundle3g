# syntax=docker/dockerfile:1

FROM golang:1.22.0

# Set destination for COPY
WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o docker-gs-ping

CMD ["docker-gs-ping"]

EXPOSE 8081


