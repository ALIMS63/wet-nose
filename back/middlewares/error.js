/* eslint-disable no-console */
export default (err, req, res) => {
  console.error(err);
  res.status(500).render('error');
};
