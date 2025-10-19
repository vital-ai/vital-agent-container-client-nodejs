import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupModel
 */
export class HaleyGroupModel extends VITAL_Node {
  public currentHaleyGroupModelVersionURI?: string;
  public activeGroupModel?: boolean;
  public currentHaleyGroupModelVersion?: string;
  public haleyGroupModelActivateDate?: string | Date;
  public haleyGroupModelDeactivateDate?: string | Date;
  public haleyGroupBase?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupModel';
  }

  /**
   * Get property definitions for HaleyGroupModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersionURI',
        tsPropertyName: 'currentHaleyGroupModelVersionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveGroupModel',
        tsPropertyName: 'activeGroupModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasCurrentHaleyGroupModelVersion',
        tsPropertyName: 'currentHaleyGroupModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelActivateDate',
        tsPropertyName: 'haleyGroupModelActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupModelDeactivateDate',
        tsPropertyName: 'haleyGroupModelDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
