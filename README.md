 
# Folder Icon Picker

**Folder Icon Picker** is an Umbraco plugin that enables users to select icons from a specified folder containing images and SVG files. This tool integrates seamlessly into the Umbraco CMS, allowing users to browse and select icons directly for document types or compositions.

You can check the nuget package from here : <a href="https://www.nuget.org/packages/Idris.Umbraco.Folder.IconPicker/#readme-body-tab" target="_blank">Click here</a>

## Features

- **Customizable Folder Selection**: Users can define a folder containing icons (images and SVGs) for the plugin to read.
- **Automatic Icon Loading**: All images and SVGs within the folder are loaded automatically and displayed in an easy-to-navigate interface.
- **Simple Icon Selection**: Users can select a single icon to assign to document types or compositions, improving visual customization and organization.

## Gallery
  
 
<p><img src="https://raw.githubusercontent.com/XeroDays/Idris.Umbraco.Folder.IconPicker/refs/heads/master/images/ImagesPanel.png" class="img-fluid" alt="Importing with uSync"></p>

## Installation

1. **Download or Clone the Repository**: Get the plugin files and place them in your Umbraco project.
2. **Move to App_Plugins**: Copy the **Folder Icon Picker** folder into the **App_Plugins** directory of your Umbraco installation.
3. **Restart Umbraco**: Restart the CMS, and the plugin should appear in the back office.

## Setup

1. **Set Icon Folder Path**: In the Folder Icon Picker settings, specify the folder path where the icons (images and SVGs) are stored. This folder will be scanned automatically by the plugin.
2. **Load Icons**: The plugin will read and display all supported icons in the folder, including PNG, JPG, and SVG files.

## Usage

1. **Access Folder Icon Picker**: In the back office, navigate to the document type or composition editor.
2. **Open Icon Picker Interface**: From the editor, launch the Folder Icon Picker tool to browse available icons.
3. **Browse and Select an Icon**: Preview icons in the folder and click on your desired icon to select it.
4. **Apply to Document Type/Composition**: The selected icon will be applied, enhancing the visual distinction of document types or compositions in the Umbraco CMS.

## Supported File Types

- **Images**: PNG, JPG
- **Vector Graphics**: SVG

## Technical Details

- **Folder Structure**: The plugin only reads icons from the specified folder. Ensure this folder is organized and contains only image or SVG files.
- **Caching**: Icons are cached for faster performance. Refresh the cache by reloading the folder from the settings if you add or modify icons.

## Troubleshooting

- **Icons Not Displaying**: Verify that the folder path is correct and accessible to Umbraco.
- **New Icons Not Visible**: Clear the cache by refreshing the icon folder view after adding new icons to the folder.

## Contributing

Contributions to **Folder Icon Picker** are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.
 
