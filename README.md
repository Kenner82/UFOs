# UFO Sightings

## Project Overview
Using javascript, HTML, and CSS, a dataset of UFO sightings was inputted into a dynamically created table that can be filtered by any combination of date, country, city, state, and shape inputted by the user. 

## Results
Using the "Filter Search" input boxes on the left side of the page, users can type in any combination of criteria that will automatically filter the dataset. If a user types in a date, such as 1/2/2010, only results from that date will be displayed.

<img width="100%" alt="filter_by_date" src="https://user-images.githubusercontent.com/111674383/204994539-23d98d83-edf3-42ce-87f0-3b235d273dd8.png">

The user can then type in a second criteria, such as only displaying results from California, and the dataset will be filtered down even further.

<img width="100%" alt="filter_by_date_and_state" src="https://user-images.githubusercontent.com/111674383/204995059-9741f18b-0976-417e-ba8b-f096c5b1afa6.png">

Users can modify or delete search criteria at any point, such as deleting the date inputted into the form, and only the data from the other filters will be displayed.

<img width="100%" alt="filter_by_state" src="https://user-images.githubusercontent.com/111674383/204995690-bfd84532-f601-4af1-8530-0a36ddeb3450.png">

Changes can be made as often as the user desires without having to back out or refresh the table entirely - when data is deleted from a box, that filter is automatically removed.

## Summary
### Drawbacks
* While the table functions as designed, an obvious drawback is that it assumes the user will input the filter criteria exactly as it is displayed in the table. If a user types in CA or California instead of ca, no data will be displayed. 
* It also assumes that users know the input options available to them - shape, for example, has a number of non-standard shapes that the user will only know if they scan through the entire unfiltered table. 

### Recommendations
* The first and easiest solution to implement would be to provide directions for the user on the format that the data should be inputted as and the search terms they can use. 
* The longer term solution would then be to standardize the data when it is entered into the dataset, so that the table data is all displayed with conventional capitalization and formatting. 
* Ultimately, the solution that would eliminate the introduction of user error would be to filter using a list of options (instead of an input box) that are generated based on the data included in the dataset
* All of these updates could be introduced and then rolled out incrementally, to provide minimal levels of guidance as quickly as possible while working on the longer term changes in the background.
