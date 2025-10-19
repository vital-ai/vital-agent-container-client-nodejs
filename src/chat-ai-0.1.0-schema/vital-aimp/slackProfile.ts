import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SlackProfile
 */
export class SlackProfile extends EndpointProfile {
  public slackUserID?: string;
  public slackTeamID?: string;
  public slackThreadID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SlackProfile';
  }

  /**
   * Get property definitions for SlackProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackUserID',
        tsPropertyName: 'slackUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackTeamID',
        tsPropertyName: 'slackTeamID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSlackThreadID',
        tsPropertyName: 'slackThreadID',
        type: 'string',
        required: false
      }
    ];
  }


}
