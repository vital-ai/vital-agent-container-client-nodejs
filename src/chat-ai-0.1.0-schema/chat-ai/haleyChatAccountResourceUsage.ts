import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAccountResourceUsage
 */
export class HaleyChatAccountResourceUsage extends VITAL_Node {
  public resourceUsageS3TotalFileCount?: number;
  public resourceUsageTaskCompleteDateTime?: string | Date;
  public resourceUsageS3GigabyteTotalStorage?: number;
  public resourceUsageGigabyteTotalStorage?: number;
  public resourceUsageUpdateDateTime?: string | Date;
  public resourceUsageCurrentUpdate?: boolean;
  public resourceUsageTotalFileCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAccountResourceUsage';
  }

  /**
   * Get property definitions for HaleyChatAccountResourceUsage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageS3TotalFileCount',
        tsPropertyName: 'resourceUsageS3TotalFileCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageTaskCompleteDateTime',
        tsPropertyName: 'resourceUsageTaskCompleteDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageS3GigabyteTotalStorage',
        tsPropertyName: 'resourceUsageS3GigabyteTotalStorage',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageGigabyteTotalStorage',
        tsPropertyName: 'resourceUsageGigabyteTotalStorage',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageUpdateDateTime',
        tsPropertyName: 'resourceUsageUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isResourceUsageCurrentUpdate',
        tsPropertyName: 'resourceUsageCurrentUpdate',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasResourceUsageTotalFileCount',
        tsPropertyName: 'resourceUsageTotalFileCount',
        type: 'number',
        required: false
      }
    ];
  }


}
