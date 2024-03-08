function transformSteps(steps) {
    const result = [];

    // Helper function to find a step by its key
    function findStepByKey(steps, key) {
        return steps.find(step => step.key === key);
    }

    // Recursive function to process each step
    function processStep(step) {
        if (!step) return;

        // Extract required fields from the current step
        const { key, question, options, next_step } = step;

        // Add the processed step to the result
        result.push({
            key,
            question,
            options,
            next_step
        });

        // Find and process the next step if it exists
        const nextStep = findStepByKey(steps, next_step);
        if (nextStep) {
            processStep(nextStep);
        }
    }

    // Start processing from the first step if it exists
    if (steps && steps.length > 0) {
        processStep(steps[0]);
    }

    return result;
}

export default transformSteps
