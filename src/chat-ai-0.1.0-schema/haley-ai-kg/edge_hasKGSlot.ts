import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot
 */
export class Edge_hasKGSlot extends Edge_hasKGEdge {
  public kGSlotRoleType?: string;
  public kGSlotTypeExternIdentifier?: string;
  public frameGraphURI?: string;
  public kGSlotRoleSequence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot';
  }

  /**
   * Get property definitions for Edge_hasKGSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotRoleType',
        tsPropertyName: 'kGSlotRoleType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeExternIdentifier',
        tsPropertyName: 'kGSlotTypeExternIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI',
        tsPropertyName: 'frameGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotRoleSequence',
        tsPropertyName: 'kGSlotRoleSequence',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGSlot
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGSlot';
  }
}
