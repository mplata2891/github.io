// src/data/labs/process-scheduler/snippet.c

void multiLevelFeedbackScheduler(Queue* hi, Queue* mid, Queue* low)
{
    Process* active_process = NULL;
    
    // Check queues for processes and process queues in order from hi to low priority
    if(queueIsNotEmpty(hi))
        feedbackQueue(hi, mid, active_process);
    else if(queueIsNotEmpty(mid))
        feedbackQueue(mid, low, active_process);
    else if(queueIsNotEmpty(low))
        firstComeFirstServeQueue(low, active_process);
    
    // Update wait times for processes that did not get CPU time
    updateWaitCountersMultipleQueues(hi, mid, low, active_process);

    // Starvation prevention: upgrade processes that have waited too long
    upgradeStarvingProcesses(hi, mid, low);

    // Simulate random new process arrivals
    if(newProcessArrival())
    {
        sortProcess(hi, mid, low, createNewProcess());
    }
}

void feedbackQueue(Queue* active_queue, Queue* lower_queue, Process* active_process)
{
    active_process = deQueue(active_queue);
    runActiveProcess(active_queue, active_process);
    active_process->processed_through_current_queue++;

    // Re-queue in current priority if time remains and quantum limit not reached
    if(active_process->completion_time_ms > 0 && active_process->processed_through_current_queue < 3)
        enQueue(active_queue, active_process);
    // Downgrade priority if process is hogging the CPU
    else if(active_process->completion_time_ms > 0)
    {
        active_process->processed_through_current_queue = 0;
        enQueue(lower_queue, active_process);
        priorityQueueDowngradeAlert();
    }
    // Free memory if process is complete
    else
        free(active_process);
}