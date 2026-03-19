/*/////////////////////////////////////////////////////////////////////////////
Class:      ECE 3310 - Data Structures and Algorithms
Professor:  Professor Meng Lai Yin

Author:     M1-K3 (Mike Plata)
Program:    PA1 - Numerical Analysis- United States Population Mean
Purpose:    To demonstrate the function of an ADT array

Function:   This program instantiates an object of type UnitesStatesPopulation,
            which is an ADT array. Next it creates 50 objects of type
            StatePopulation and stores these objects in the ADT array. Then,
            reading from two separate files, writes to the data members of each
            StatePopulation, filling it with a state's name, population in the
            given year, and the year 2020. Finally the Mean of the United States
            Population is calculated recursively. All data is displayed to the
            user.

NOTES:      1. 9/21/2022 - Professor Yin modified the assignment by the following:
                a) data members encapsulated by the struct holding the data
                    'state name', 'state population', and 'year' no longer needs
                    the data member 'year', as we are only working with one year,
                    2020.
                b) the ADT array, may encapsulate a static array instead of a
                    pointer based dynamic array
            2. 9/25/2022 - A suggestion from a classmate was to use type 'long'
                for population and mean to express the values without scientific
                notation. Works well this way. I believe it was the right call.
*//////////////////////////////////////////////////////////////////////////////
#include <iostream>
#include <fstream>
#include <iomanip>
#include <string>
#include "UsaPopulations.h"
using namespace std;

///////////////////////////////////////////////////////////////////////////////
//========================== Function Prototypes ============================//
///////////////////////////////////////////////////////////////////////////////

void writeStateNamesToStates(ifstream& fileObjectIn, 
    UsaPopulations& populations);
void writeStatePopulationsToStates(ifstream& fileObjectIn, 
    UsaPopulations& populations);
void writeTable(UsaPopulations populations);
long calculatePopulationMean(UsaPopulations populations, int n);

///////////////////////////////////////////////////////////////////////////////
//============================= Global Constants ============================//
///////////////////////////////////////////////////////////////////////////////

const string NAMES_FILE = "StateNames.txt",
    POPULATIONS_FILE = "StatePopulations.txt";

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

///////////////////////////////////////////////////////////////////////////////
//========================== Supplemental Methods ===========================//
///////////////////////////////////////////////////////////////////////////////

void writeStateNamesToStates(ifstream& fileObjectIn, 
    UsaPopulations& populations)
{
    string name = "";
    int dataSize = populations.getSize();

    for (int index = 0; index < dataSize; index++)
    {
        //write state name from file
        getline(fileObjectIn, name);

        populations.setStateName(index, name);
    }

    fileObjectIn.close();
}

void writeStatePopulationsToStates(ifstream& fileObjectIn, 
    UsaPopulations& populations)
{
    string population = "";
    int dataSize = populations.getSize();

    for (int index = 0; index < dataSize; index++)
    {
        //write state population from file
        getline(fileObjectIn, population);

        populations.setStatePopulation(index, stol(population));
    }

    fileObjectIn.close();
}

long calculatePopulationMean(UsaPopulations populations, int n)
{
    if (n == 1)
        return populations.getState(n - 1).statePopulation;
    else
        return ((calculatePopulationMean(populations, n - 1) * (n - 1) +
            populations.getState(n - 1).statePopulation) / n);
}

void writeTable(UsaPopulations populations)
{
    const int COLUMN_WIDTH_1 = 20, COLUMN_WIDTH_2 = 10, WIDTH_MOD = 5;
    const string COLUMN_1 = "STATE", COLUMN_2 = "POPULATION",
        OUTER_BORDER = string((COLUMN_WIDTH_1 + COLUMN_WIDTH_2 + WIDTH_MOD), '='),
        INNER_BORDER = string((COLUMN_WIDTH_1 + COLUMN_WIDTH_2 + WIDTH_MOD), '-');

    int dataSize = populations.getSize();
    
    cout << endl << OUTER_BORDER << endl 
        << setw(COLUMN_WIDTH_1) << left << COLUMN_1 + "\t" 
        << setw(COLUMN_WIDTH_2) << left << COLUMN_2 + "\n" 
        << OUTER_BORDER << endl;

    for (int index = 0; index < dataSize; index++)
    {
        cout << setw(COLUMN_WIDTH_1) << left 
            << populations.getState(index).stateName << "\t"
            << setw(COLUMN_WIDTH_2) << left 
            << populations.getState(index).statePopulation << "\n"
            << INNER_BORDER << endl;
    }

    cout << OUTER_BORDER << endl;
}
