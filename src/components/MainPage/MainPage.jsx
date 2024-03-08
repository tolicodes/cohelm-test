import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import StepsVisualization from './StepsVisualization';
import Details from './Details';
import PDFViewer from './PDFViewer';

const PDF_URL = './medical-record.pdf';

const MainPage = ({ data }) => {
    const steps = data.steps;

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const currentStep = steps[currentStepIndex];


    return (
        <>
            <StepsVisualization data={data} />

            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <NavigationBar
                    currentStepIndex={currentStepIndex}
                    setCurrentStepIndex={setCurrentStepIndex}
                    stepsLength={data.steps.length}
                />
                <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <Details currentStep={currentStep} style={{ flex: 1 }} />
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <PDFViewer pdfUrl={PDF_URL} style={{ flex: 1 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;