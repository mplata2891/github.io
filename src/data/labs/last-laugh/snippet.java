//initiate do-while loop
     do {
    	 
    	 //invoke runTitleScreen method
    	 gameDriver.runTitleScreen(gameStructure, fileTool, ioTool);
    	 
    	 //initiate switch statement
    	 switch(gameStructure.getSelector().getTitleSelection()) {
    	 
	    	//enter case 1 
    	 	case 1:	gameDriver.runIntroSequence(gameStructure, fileTool, ioTool);
	    	 		break;//break out of switch
	    	 			
	    	//enter case 2 
    	 	case 2:	generalTool.runUpdateGameObjects(gameStructure);
	    			break;//break out of switch
	    			
    	 	//enter default case
    	 	default:	ioTool.tauntPlayer();
    	 }//end switch