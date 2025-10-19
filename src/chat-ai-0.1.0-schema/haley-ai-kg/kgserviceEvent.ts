import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGServiceEvent
 */
export class KGServiceEvent extends VITAL_Node {
  public kGServiceEventTimestamp?: string | Date;
  public kGServiceURI?: string;
  public kGServiceEventUUID?: string;
  public kGServiceEventMetaJSON?: string;
  public kGServiceEventUsername?: string;
  public kGServiceEventSpaceIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGServiceEvent';
  }

  /**
   * Get property definitions for KGServiceEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventTimestamp',
        tsPropertyName: 'kGServiceEventTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceURI',
        tsPropertyName: 'kGServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventUUID',
        tsPropertyName: 'kGServiceEventUUID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventMetaJSON',
        tsPropertyName: 'kGServiceEventMetaJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventUsername',
        tsPropertyName: 'kGServiceEventUsername',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventSpaceIdentifier',
        tsPropertyName: 'kGServiceEventSpaceIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
