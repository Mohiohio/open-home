const deploy = require("shipit-deploy")
const shared = require("shipit-shared")

module.exports = shipit => {
  deploy(shipit)
  shared(shipit)

  shipit.initConfig({
    default: {
      dirToCopy: "dist",
      repositoryUrl: "git@github.com:Mohiohio/open-home.git",
      shallowClone: true,
      keepReleases: 3,
      branch: "master",
      servers: "myproperties.co.nz",
      shared: {
        files: [{ path: ".env", overwrite: true }]
      }
    },
    staging: {
      deployTo: "/var/www/open-home-stage/"
    },
    live: {
      deployTo: "/var/www/open-home/"
    }
  })

  shipit.on("fetched", () => shipit.start("yarn:install", "npm:build"))

  shipit.blTask("yarn:install", () =>
    shipit.local("yarn install --non-interactive", { cwd: shipit.workspace })
  )

  shipit.blTask("npm:build", async () => {
    await shipit.local(`cp .env ${shipit.workspace}`)
    return shipit.local("npm run build", { cwd: shipit.workspace })
  })
}
