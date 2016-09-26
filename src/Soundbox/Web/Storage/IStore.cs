namespace Web.Storage
{
    public interface IStore<T>
    {
        T Get(string id);
    }
}