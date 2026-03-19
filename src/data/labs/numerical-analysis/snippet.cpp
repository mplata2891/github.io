// src/data/labs/numerical-analysis/snippet.cpp

///////////////////////////////////////////////////////////////////////////////
//========================= Main Entryway Of Program ========================//
///////////////////////////////////////////////////////////////////////////////
int main()
{    
    //instantiation of objects
    UsaPopulations usPopulation2020 = UsaPopulations();
    ifstream stateNames(NAMES_FILE), 
        statePopulations(POPULATIONS_FILE);

    //declare and initialize string constants
    const string POPULATION_MESSAGE = "Have you ever wondered what the mean, aka "
        "average, population across the United States was in 2020?\n\n"
        "Well, neither have I. Despite that, this program has calculated "
        "it for you.\n\n"
        "You're Welcome!\n",
        FILE_ERROR = "Could not open the file - '",
        POPULATION_LABEL = "\nThe U.S. population MEAN for 2020 is: ",
        END_MESSAGE = "\nThe program has ended. You may now close the window";

    //declare and initialize variables
    long populationMean_2020 = 0;

    //if file is open write data to array or exit with error
    if(stateNames.is_open())
        writeStateNamesToStates(stateNames, usPopulation2020);
    else
    {
        cerr << FILE_ERROR << NAMES_FILE << "'\n";

        return EXIT_FAILURE;
    }
    
    //if file is open write data to array or exit with error
    if(statePopulations.is_open())
        writeStatePopulationsToStates(statePopulations, usPopulation2020);
    else
    {
        cerr << FILE_ERROR << POPULATIONS_FILE << "'\n";

        return EXIT_FAILURE;
    }
    
    //calculate mean of US population in 2020
    populationMean_2020 = calculatePopulationMean(usPopulation2020,
        usPopulation2020.getSize());

    //displays message to user and waits for them to continue
    cout << POPULATION_MESSAGE;
    system("pause");

    //displays data: State Names, State Populations, and Population Mean
    writeTable(usPopulation2020);
    cout << POPULATION_LABEL << populationMean_2020 << END_MESSAGE + "\n\n";
    
    //fin
    return 0;
}