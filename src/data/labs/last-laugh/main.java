//import java.util.*;

public class LastLaugh{

  public static void main(String[] args){

      //instantiate and initialize objects
	  GeneralUtility generalTool = new GeneralUtility();
	  FileUtility fileTool = new FileUtility();
	  InputUtility ioTool = new InputUtility();
	  LoadGame gameTool = new LoadGame();
	  CoreObjects gameStructure = new CoreObjects();
	  GameDriver gameDriver = new GameDriver();
	  
	  
	  //invoke loadObjects method to instantiate all needed objects
	  gameTool.createAndPopulateAllObjects(gameStructure);
	  
	  
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
    		
    	 
    	 if(gameStructure.getSelector().getTitleSelection() != 3)
    		 gameDriver.runMainGame(gameStructure, ioTool);
    	 
     }while(gameStructure.getSelector().getTitleSelection() != 3);

  }//end main

}//end class