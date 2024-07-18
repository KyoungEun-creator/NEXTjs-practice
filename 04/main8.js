// async await

// 1. 기존 Promise
const getSunIcon = () =>
  new Promise((resolve, _) => {
    resolve("🌞");
  });

getSunIcon() //
  .then((sun) => console.log(sun));

// 2. async 이용해 간단해짐
// async 붙인 함수는 무조건 resolve (reject 말고)
const getSunIcon = async () => "🌞";

getSunIcon() //
  .then((sun) => console.log(sun));

// 3. await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(1000);
  return "🌞";
};

// 4. Promise를 이용한 비동기 처리
const getSunIcon = async () => {
  //
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🌞");
    }, 1000);
  });
};
getSunIcon() //
  .then((sun) => console.log(sun));

// 5. await을 이용한 비동기 처리
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(3000);
  return "🌞"; // resolve("🌞")
};

getSunIcon() //
  .then((sun) => console.log(sun));

// 6-1. Promise
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(1000);
  return "😎"; // resolve("해")와 같음
};
const getWaveIcon = async () => {
  await delay(1000);
  return "🌊"; // resolve("파도")와 같음
};
const getCloudIcon = async () => {
  await delay(1000);
  return "🌩️";
};

const getAllIcons = () => {
  return getSunIcon().then((sun) => {
    return getWaveIcon().then((wave) => {
      return getCloudIcon().then((cloud) => {
        console.log(`${sun} ${wave} ${cloud}`);
      });
    });
  });
};
getAllIcons();
// 단점: Promise 지옥...

// 6-2. async await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(1000);
  return "😎"; // resolve("해")와 같음
};
const getWaveIcon = async () => {
  await delay(1000);
  return "🌊"; // resolve("파도")와 같음
};
const getCloudIcon = async () => {
  await delay(1000);
  return "🌩️";
};

const getAllIcons = async () => {
  const sun = await getSunIcon();
  const wave = await getWaveIcon();
  const cloud = await getCloudIcon();
  console.log(`${sun} ${wave} ${cloud}`);
};
getAllIcons();
// 하나씩 다 끝날 때까지 기다렸다가 다음이 실행됨
// 단점: 각 소요시간을 모두 더한 만큼 시간 소요됨

// 6-3. Promise.all
// 비동기함수들을 병렬처리 하고 싶을 때 (한번에 동시 실행시키고 싶어)
const getAllIcons = async () => {
  Promise.all([getSunIcon(), getWaveIcon(), getCloudIcon()]).then((icons) => {
    console.log(icons);
    console.timeEnd();
  });
};
const icons = await Promise.all([getSunIcon(), getWaveIcon(), getCloudIcon()]);
console.log(icons.join(","));

// Promise.all의 문제점: 코드실행하다가 에러 떠버리면 뒤 코드 실행 안 하고 멈춰버림
// -> allSettled
const icons = await Promise.allSettled([getSunIcon(), getWaveIcon(), getCloudIcon()]);
console.log(
  icons
    .filter((icon) => icon.status === "fulfilled")
    .map((icon) => icon.value)
    .join(",")
);
