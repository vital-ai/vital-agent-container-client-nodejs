import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#CampaignAction
 */
export class CampaignAction extends VITAL_Node {
  public actionStatus?: string;
  public minutesBetweenTweets?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#CampaignAction';
  }

  /**
   * Get property definitions for CampaignAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasActionStatus',
        tsPropertyName: 'actionStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMinutesBetweenTweets',
        tsPropertyName: 'minutesBetweenTweets',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
