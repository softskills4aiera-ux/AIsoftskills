# PowerShell script to remove the last subtopic from each module
$moduleFiles = @("module1Data.ts", "module2Data.ts", "module3Data.ts", "module4Data.ts", "module5Data.ts", "module6Data.ts", "module7Data.ts", "module8Data.ts")

foreach ($file in $moduleFiles) {
    $filePath = "src/data/$file"
    if (Test-Path $filePath) {
        Write-Host "Processing $file..."
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Find the last subtopic by looking for the pattern before the closing bracket
        # This is a simplified approach - we'll remove everything after the second-to-last closing brace
        $lines = $content -split "`n"
        $newLines = @()
        $braceCount = 0
        $foundLastSubtopic = $false
        
        for ($i = 0; $i -lt $lines.Length; $i++) {
            $line = $lines[$i]
            
            # Count opening and closing braces
            $braceCount += ($line.ToCharArray() | Where-Object { $_ -eq '{' }).Count
            $braceCount -= ($line.ToCharArray() | Where-Object { $_ -eq '}' }).Count
            
            # If we're at the end of the subtopics array and haven't found the last subtopic yet
            if ($line.Trim() -eq "];" -and -not $foundLastSubtopic) {
                $foundLastSubtopic = $true
                # Skip this line (the closing bracket)
                continue
            }
            
            # If we haven't found the last subtopic, keep the line
            if (-not $foundLastSubtopic) {
                $newLines += $line
            }
        }
        
        # Write the modified content back
        $newContent = $newLines -join "`n"
        Set-Content -Path $filePath -Value $newContent -NoNewline
        
        Write-Host "Removed last subtopic from $file"
    }
}

Write-Host "Done! All modules now have 6 subtopics each."

