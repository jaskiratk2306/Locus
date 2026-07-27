# Locus Backend Startup Script
# Run from any terminal: C:\Dev\Geo_Map\backend\start-backend.ps1

$env:JAVA_HOME = "C:\Program Files\Java\jdk-25.0.2"
$mvn = "C:\Program Files\apache-maven-3.9.16\bin\mvn.cmd"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Locus Backend - Starting..." -ForegroundColor Cyan
Write-Host "  http://localhost:8080" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

& $mvn -s "$PSScriptRoot\mvn-settings.xml" spring-boot:run
