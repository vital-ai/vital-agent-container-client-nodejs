import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ActivityCard
 */
export class ActivityCard extends Card {
  public activityMessage?: string;
  public activityTaskIdentifier?: string;
  public activityCancelEnabled?: boolean;
  public activityComplete?: boolean;
  public activitySpinnerEnabled?: boolean;
  public activityCanceled?: boolean;
  public activityItemJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ActivityCard';
  }

  /**
   * Get property definitions for ActivityCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityMessage',
        tsPropertyName: 'activityMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityTaskIdentifier',
        tsPropertyName: 'activityTaskIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCancelEnabled',
        tsPropertyName: 'activityCancelEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityComplete',
        tsPropertyName: 'activityComplete',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivitySpinnerEnabled',
        tsPropertyName: 'activitySpinnerEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isActivityCanceled',
        tsPropertyName: 'activityCanceled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityItemJSON',
        tsPropertyName: 'activityItemJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
