using Android.App;
using Android.OS;
using Android.Widget;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Json;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace JenaSENSE
{
    [Activity(Label = "JenaSENSE", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            
            SetContentView (Resource.Layout.Main);

            Button buttonAPI = FindViewById<Button>(Resource.Id.buttonAPI);
            buttonAPI.Click += async delegate
            {
                await GetFromAPI();
            };

            Button buttonWeb = FindViewById<Button>(Resource.Id.buttonWeb);
            buttonWeb.Click += delegate
            {
                StartActivity(typeof(LoadFromWeb));
            };
        }

        private async Task GetFromAPI()
        {
            TextView totalCountReturn = FindViewById<TextView>(Resource.Id.totalCountReturn);
            TextView totalManReturn = FindViewById<TextView>(Resource.Id.totalManReturn);
            TextView totalWomanReturn = FindViewById<TextView>(Resource.Id.totalWomanReturn);
            TextView totalAgeReturn = FindViewById<TextView>(Resource.Id.totalAgeReturn);
            TextView totalAngerReturn = FindViewById<TextView>(Resource.Id.totalAngerReturn);
            TextView totalContemptReturn = FindViewById<TextView>(Resource.Id.totalContemptReturn);
            TextView totalDisgustReturn = FindViewById<TextView>(Resource.Id.totalDisgustReturn);
            TextView totalFearReturn = FindViewById<TextView>(Resource.Id.totalFearReturn);
            TextView totalHappinessReturn = FindViewById<TextView>(Resource.Id.totalHappinessReturn);
            TextView totalNeutralReturn = FindViewById<TextView>(Resource.Id.totalNeutralReturn);
            TextView totalSadnessReturn = FindViewById<TextView>(Resource.Id.totalSadnessReturn);
            TextView totalSurpriseReturn = FindViewById<TextView>(Resource.Id.totalSurpriseReturn);

            string url = "http://13.69.10.180/getInfo";
            HttpClient client = new HttpClient();

            var response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var content = await response.Content.ReadAsStringAsync();
                dynamic items = JsonConvert.DeserializeObject(content);
                totalCountReturn.Text = items.count.total.ToString();
                totalManReturn.Text = items.gender.total.male.ToString();
                totalWomanReturn.Text = items.gender.total.female.ToString();

                totalAgeReturn.Text = String.Format("{0:F1}", items.age.total);
                totalAngerReturn.Text = (items.emotion.total.anger * items.count.total).ToString();
                totalContemptReturn.Text = (items.emotion.total.contempt * items.count.total).ToString();
                totalDisgustReturn.Text = (items.emotion.total.disgust * items.count.total).ToString();
                totalFearReturn.Text = (items.emotion.total.fear * items.count.total).ToString();
                totalHappinessReturn.Text = (items.emotion.total.happiness * items.count.total).ToString();
                totalNeutralReturn.Text = (items.emotion.total.neutral * items.count.total).ToString();
                totalSadnessReturn.Text = (items.emotion.total.sadness * items.count.total).ToString();
                totalSurpriseReturn.Text = (items.emotion.total.surprise * items.count.total).ToString();
            }
        }
    }
}

