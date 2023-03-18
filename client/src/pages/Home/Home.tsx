import Footer from 'components/Footer'
import Header from '../../components/Header'
import NewsBlock from './components/NewsBlock'
import Slider from './components/Slider'
import slides from './components/slides.json'

const Home = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      <Slider slides={slides} />
      <div className="mt-20 max-[1200]:mt-12">
        <h1 className="text-5xl text-center font-extrabold dark:text-black my-7">Новости нашей компании:</h1>
        <div className="justify-between rounded-[10px] w-full max-w-[1200px] m-auto p-3 md:flex-row flex flex-col">
          <NewsBlock
            title="Новость 1"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus vulputate sodales. Morbi interdum purus et lectus iaculis varius. Fusce ex tortor, efficitur non pretium id, aliquam et nisl. Integer pretium viverra mollis. Mauris pharetra nulla a est aliquam, sit amet condimentum sapien interdum. Donec a ante in ex ornare semper. Nam pretium est ut diam auctor, sed volutpat ex consectetur. Vestibulum euismod quis elit a lobortis. Nulla at consectetur lectus. Ut quis lectus scelerisque, iaculis purus ut, euismod erat. Nulla facilisi.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tristique risus a vulputate auctor. Integer maximus neque ac commodo ultricies. Curabitur eget sapien diam. Vivamus vestibulum elit tortor, vel elementum lorem pulvinar ac. Nam mollis suscipit dolor, non ultricies diam facilisis nec. Duis aliquet tempor purus, vel iaculis mauris. Vestibulum eget feugiat diam. Nam laoreet id massa in aliquam. Suspendisse facilisis, sem non aliquet dapibus, quam eros placerat odio, eu facilisis urna ipsum sed libero. Cras eu neque metus. Nullam at tempus felis. Ut leo tellus, rhoncus tincidunt lectus et, gravida fringilla dolor.

Morbi hendrerit in tellus nec rutrum. Nulla aliquet enim id dui dignissim interdum. Pellentesque quis aliquet nulla. Nulla lacinia malesuada diam. Aenean at ullamcorper tellus, eget molestie nibh. Mauris id blandit elit, vitae iaculis orci. Curabitur ac ex vel nunc consectetur faucibus placerat ut leo. Donec laoreet arcu dolor, at venenatis eros tristique ut. Fusce mattis euismod iaculis. Proin in euismod odio. Nulla ac imperdiet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut dictum velit. In mattis metus at nisl tempor, eget varius lectus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce lacinia quam et pellentesque pulvinar."
          />
          <NewsBlock
            title="Новость 2"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus vulputate sodales. Morbi interdum purus et lectus iaculis varius. Fusce ex tortor, efficitur non pretium id, aliquam et nisl. Integer pretium viverra mollis. Mauris pharetra nulla a est aliquam, sit amet condimentum sapien interdum. Donec a ante in ex ornare semper. Nam pretium est ut diam auctor, sed volutpat ex consectetur. Vestibulum euismod quis elit a lobortis. Nulla at consectetur lectus. Ut quis lectus scelerisque, iaculis purus ut, euismod erat. Nulla facilisi.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tristique risus a vulputate auctor. Integer maximus neque ac commodo ultricies. Curabitur eget sapien diam. Vivamus vestibulum elit tortor, vel elementum lorem pulvinar ac. Nam mollis suscipit dolor, non ultricies diam facilisis nec. Duis aliquet tempor purus, vel iaculis mauris. Vestibulum eget feugiat diam. Nam laoreet id massa in aliquam. Suspendisse facilisis, sem non aliquet dapibus, quam eros placerat odio, eu facilisis urna ipsum sed libero. Cras eu neque metus. Nullam at tempus felis. Ut leo tellus, rhoncus tincidunt lectus et, gravida fringilla dolor.

Morbi hendrerit in tellus nec rutrum. Nulla aliquet enim id dui dignissim interdum. Pellentesque quis aliquet nulla. Nulla lacinia malesuada diam. Aenean at ullamcorper tellus, eget molestie nibh. Mauris id blandit elit, vitae iaculis orci. Curabitur ac ex vel nunc consectetur faucibus placerat ut leo. Donec laoreet arcu dolor, at venenatis eros tristique ut. Fusce mattis euismod iaculis. Proin in euismod odio. Nulla ac imperdiet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut dictum velit. In mattis metus at nisl tempor, eget varius lectus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce lacinia quam et pellentesque pulvinar."
          />
          <NewsBlock
            title="Новость 3"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus vulputate sodales. Morbi interdum purus et lectus iaculis varius. Fusce ex tortor, efficitur non pretium id, aliquam et nisl. Integer pretium viverra mollis. Mauris pharetra nulla a est aliquam, sit amet condimentum sapien interdum. Donec a ante in ex ornare semper. Nam pretium est ut diam auctor, sed volutpat ex consectetur. Vestibulum euismod quis elit a lobortis. Nulla at consectetur lectus. Ut quis lectus scelerisque, iaculis purus ut, euismod erat. Nulla facilisi.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tristique risus a vulputate auctor. Integer maximus neque ac commodo ultricies. Curabitur eget sapien diam. Vivamus vestibulum elit tortor, vel elementum lorem pulvinar ac. Nam mollis suscipit dolor, non ultricies diam facilisis nec. Duis aliquet tempor purus, vel iaculis mauris. Vestibulum eget feugiat diam. Nam laoreet id massa in aliquam. Suspendisse facilisis, sem non aliquet dapibus, quam eros placerat odio, eu facilisis urna ipsum sed libero. Cras eu neque metus. Nullam at tempus felis. Ut leo tellus, rhoncus tincidunt lectus et, gravida fringilla dolor.

Morbi hendrerit in tellus nec rutrum. Nulla aliquet enim id dui dignissim interdum. Pellentesque quis aliquet nulla. Nulla lacinia malesuada diam. Aenean at ullamcorper tellus, eget molestie nibh. Mauris id blandit elit, vitae iaculis orci. Curabitur ac ex vel nunc consectetur faucibus placerat ut leo. Donec laoreet arcu dolor, at venenatis eros tristique ut. Fusce mattis euismod iaculis. Proin in euismod odio. Nulla ac imperdiet nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ut dictum velit. In mattis metus at nisl tempor, eget varius lectus hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce lacinia quam et pellentesque pulvinar."
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
