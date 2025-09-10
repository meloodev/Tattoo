    Initially, the project required creating at least ten components from ClickUp, which I completed successfully. Later, I assembled a test project — an online store with fully functional product cards. I applied modern React features such as useState for state management and React.memo for performance optimization and caching. For form handling and validation, I used react-hook-form in combination with zod schemas to ensure robust multi-level input validation. The project is still under development and can be further expanded with additional features in the future.

The repository name remained tattoo because the components were originally built for that project, and later I decided to repurpose them for the online store.
The application includes the following core components and features:
Cart – allows adding and removing products, updating individual product quantities (1–100), calculating total product counts, and computing the total price.
ProductCard – displays individual products with basic information and allows navigation to the detailed product page.
ProductPage – provides detailed information about a selected product and allows adding it to the cart directly.
RegistrationForm – includes multiple input fields with validation, ensuring correct user data before submission.
LoginForm – handles user authentication with validation for email, password, and other necessary fields.
PageNotFound – a 404 page displayed when the user navigates to an invalid route.
LoadMoreButton – enables lazy-loading of product cards to avoid rendering all items at once, improving performance.
SearchComponent – allows users to search for specific products within the catalog.
CustomFilter – lets users filter products based on categories, price ranges, or other attributes.
Spinner – a loading indicator that appears during asynchronous actions and disappears after 200ms to provide smooth UX feedback.
MessageBox – displays hints, tips, or notifications to guide users through interactions.
Additional features include the use of React Router for passing data between components and enabling navigation across pages. All major functionalities are modularized into components to maintain a clean and scalable code structure.

Overall, the project demonstrates a solid understanding of React fundamentals, component-based architecture, form validation, routing, state management, and performance optimization. All core requirements, including the creation of at least ten functional components, have been successfully fulfilled.
