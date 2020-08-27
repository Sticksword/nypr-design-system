import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | organism/whats-on/schedule', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with correct title and timestamp', async function(assert) {
    this.set('nowPlaying', {
      nextAiring: {
        showTitle: 'BBC World Service',
        startTime: new Date(2020, 8, 27, 8, 0, 0, 0),
        show: {
          image: {
            url: ''
          }
        }
      }
    });

    await render(hbs`<Organism::WhatsOn::Schedule @airing={{this.nowPlaying.nextAiring}} @scheduleUrl='https://www.wnyc.org/schedule/' />`);

    assert.dom('.whats-on-schedule-metadata-text-outer-title-outer-title').hasText('BBC World Service');
    assert.dom('.whats-on-schedule-metadata-text-outer-time').hasText('8:00 AM');
    assert.dom('.whats-on-schedule-full-schedule-button').exists();
  });
});
