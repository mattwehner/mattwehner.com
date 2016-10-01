using Web.Services.DataContracts;

namespace Web.Storage
{
    public interface IProfileStore
    {
        Profile Get(string id);
    }
}