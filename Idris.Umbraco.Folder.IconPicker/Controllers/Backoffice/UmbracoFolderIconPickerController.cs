
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;

namespace Idris.Umbraco.Folder.IconPicker.Controllers.Backoffice
{
    [PluginController("idris")]
    public class UmbracoFolderIconPickerController : UmbracoAuthorizedApiController
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public UmbracoFolderIconPickerController(IHttpClientFactory httpClientFactory) =>
            _httpClientFactory = httpClientFactory;


        [HttpGet]
        [Authorize]
        public async Task<ActionResult> GetAssetIcons([FromQuery] string folder)
        {
            List<AssetIcon> icons = new List<AssetIcon>();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", folder);
            if (Directory.Exists(path))
            {
                var files = Directory.GetFiles(path);
                foreach (var file in files)
                {
                    if (!file.EndsWith(".png") && !file.EndsWith(".jpg") && !file.EndsWith(".jpeg") && !file.EndsWith(".svg"))
                        continue;

                    var name = Path.GetFileName(file);
                    string Extention = Path.GetExtension(file); 
                    icons.Add(new AssetIcon
                    {
                        Name = name,
                        Path = $"/{folder}/{name}",
                        Type = Extention
                    });
                }
            }

            return Ok(icons);
        }
    }

    public class AssetIcon
    {
        public string Name { get; set; }
        public string Path { get; set; }
        public string Type { get; set; }
    }
}
