document.addEventListener('DOMContentLoaded', () => {
    const scriptData = {
        name: "Non Linkvertise script",
        developer: "RobloxMaster123",
        description: "An efficient auto-farming script for XYZ game that helps players level up quickly and collect resources automatically.",
        image: "https://placehold.co/600x400.png",
        code: `-- Auto Farm Script
local player = game.Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()

function autoFarm()
    while true do
        -- Find nearest resource
        local nearestResource = findNearestResource()
        
        -- Move to resource
        if nearestResource then
            moveToResource(nearestResource)
            farm(nearestResource)
        end
        
        wait(1)  -- Wait before next iteration
    end
end

function findNearestResource()
    -- Logic to find nearest farmable resource
    -- Return resource or nil
end

function moveToResource(resource)
    -- Pathfinding logic to move to resource
end

function farm(resource)
    -- Farming interaction logic
end

-- Start auto farm
autoFarm()`
    };

    // Populate elements
    document.getElementById('script-name').textContent = scriptData.name;
    document.getElementById('script-developer').textContent = `By: ${scriptData.developer}`;
    document.getElementById('script-description').textContent = scriptData.description;
    document.getElementById('script-image').src = scriptData.image;
    document.getElementById('script-code').textContent = scriptData.code;

    // Highlight code
    Prism.highlightAll();

    // Copy button functionality
    const copyButton = document.getElementById('copy-button');
    const scriptCodeElement = document.getElementById('script-code');

    copyButton.addEventListener('click', () => {
        // Create a temporary textarea to copy the text
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = scriptCodeElement.textContent;
        document.body.appendChild(tempTextArea);
        
        // Select and copy the text
        tempTextArea.select();
        document.execCommand('copy');
        
        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);

        // Provide visual feedback
        copyButton.textContent = 'Copied!';
        copyButton.classList.add('copied');

        // Reset button after 2 seconds
        setTimeout(() => {
            copyButton.textContent = 'Copy Code';
            copyButton.classList.remove('copied');
        }, 2000);
    });
});